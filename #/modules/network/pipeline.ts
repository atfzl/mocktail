import { fromEvent } from 'rxjs';
import { setNetworkState } from './state';

const networkCellPipeline = (selectedRowId: string) => (
  element: HTMLElement,
) => {
  fromEvent(element, 'click').subscribe(() => {
    setNetworkState({ selectedRowId });
  });
};

const closeNetworkDetailPipeline = (element: HTMLElement) => {
  fromEvent(element, 'click').subscribe(() => {
    setNetworkState({ selectedRowId: undefined });
  });
};

export { networkCellPipeline, closeNetworkDetailPipeline };
