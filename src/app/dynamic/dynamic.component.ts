import {
    Component,
    Input,
    ViewContainerRef,
    ViewChild,
    ReflectiveInjector,
    ComponentFactoryResolver,
    OnInit,
    OnDestroy
} from '@angular/core';
import { DynamicService } from './dynamic.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-dynamic-component',
    template: `
    <div #dynamicComponentContainer></div>
  `,
})
export class DynamicComponent implements OnInit, OnDestroy {
    currentComponent = null;
    subscription: Subscription;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    set componentData(data: { component: any, inputs: any }) {
        if (!data) {
            return;
        }




        // let componentFactory = this.resolver.resolveComponentFactory(data.component);
        // let viewContainerRef = this.componentHost.viewContainerRef;
        // let componentRef = viewContainerRef.createComponent(componentFactory);
        // (componentRef.instance).data = data.inputs;



        // Inputs need to be in the following format to be resolved properly
        const inputProviders = Object.keys(data.inputs).map((inputName) => {
            return {
                provide: inputName,
                useValue: data.inputs[inputName]
            };
        });
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

        // We create a factory out of the component we want to create
        const factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        const component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }

    constructor(private resolver: ComponentFactoryResolver,
        private dynamicService: DynamicService) {
    }


    ngOnInit() {
        this.subscription = this.dynamicService.dynamicSubject
            .subscribe((state: any) => {
                if(state.action === 'create') {
                     const input = state.value.input || {};
                input.destroy = () => {
                    this.currentComponent.destroy();
                };
                this.componentData = {
                    component: state.value.component,
                    inputs: input
                };
                } else if(state.action === 'destroy') {
                    if (this.currentComponent) {
                        this.currentComponent.destroy();
                    }
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
