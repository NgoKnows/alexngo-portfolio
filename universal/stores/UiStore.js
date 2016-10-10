import { observable, asStructure } from 'mobx';
import { debounce } from 'lodash';

export class UiStore {
    // @observable windowDimensions = asStructure({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // });
    // @observable scrollPosition = window.scrollY;
    //
    // constructor() {
    //     window.addEventListener('resize', debounce(() => {
    //         this.windowDimensions = {
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         };
    //     }, 100));
    //
    //     window.addEventListener('scroll', debounce(() => {
    //         this.scrollPosition = window.scrollY;
    //     }, 50));
    // }
}

// export as singleton
export default new UiStore();
