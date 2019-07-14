import { NetworkRow } from '#/interfaces';
import { Elevation } from '@rmwc/elevation';
import { CollapsibleList, SimpleListItem } from '@rmwc/list';
import * as React from 'react';

type IProps = NetworkRow;

class NetworkRowItem extends React.Component<IProps> {
  public render() {
    const { request } = this.props;

    return (
      <Elevation z={1}>
        <CollapsibleList
          style={{ marginBottom: 12 }}
          handle={
            <SimpleListItem
              text="Cookies"
              graphic="favorite"
              metaIcon="chevron_right"
            />
          }
          onOpen={() => console.log('open')}
          onClose={() => console.log('close')}
        >
          <SimpleListItem text={request.url} />
        </CollapsibleList>
      </Elevation>
    );
  }
}

export default NetworkRowItem;
