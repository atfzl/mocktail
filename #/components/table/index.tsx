import { NetworkRow } from '#/interfaces';
import {
  closeNetworkDetailPipeline,
  networkCellPipeline,
} from '#/modules/network/pipeline';
import { css, cx } from 'emotion';
import { For, Show } from 'solid-js/dom';
import { TBodyRowStyles, TdStyles, ThStyles } from './styles';

interface Props {
  rows: NetworkRow[];
  selectedRowId?: string;
}

function Table(props: Props) {
  return (
    <div
      className={css`
        height: 100%;
        position: relative;
      `}
    >
      <table
        className={css`
          border-spacing: 0;
          width: 100%;
        `}
      >
        <thead>
          <tr className={css``}>
            <th className={ThStyles}>Name</th>
            <Show when={(void 0, !props.selectedRowId)}>
              <>
                <th className={ThStyles}>Method</th>
                <th className={ThStyles}>Status</th>
                <th className={ThStyles}>Data</th>
                <th className={ThStyles}>Time</th>
              </>
            </Show>
          </tr>
        </thead>
        <tbody className={css``}>
          <For each={(void 0, props.rows)}>
            {row => {
              return (
                <tr className={TBodyRowStyles}>
                  <td
                    className={cx(
                      TdStyles,
                      css`
                        cursor: pointer;
                      `,
                    )}
                    forwardRef={networkCellPipeline(row.request.id)}
                    style={
                      (void 0,
                      {
                        backgroundColor:
                          props.selectedRowId === row.request.id
                            ? '#1973e8'
                            : 'transparent',
                        color:
                          props.selectedRowId === row.request.id
                            ? '#fff'
                            : '#000',
                      })
                    }
                  >
                    {row.request.url}
                  </td>
                  <Show when={(void 0, !props.selectedRowId)}>
                    <td className={TdStyles}>{row.request.method}</td>
                    <td className={TdStyles}>
                      {row.response ? row.response.status : '-'}
                    </td>
                    <td className={TdStyles}>
                      {row.response ? row.response.data : '-'}
                    </td>
                    <td className={TdStyles}>3s</td>
                  </Show>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
      <Show when={(void 0, !!props.selectedRowId)}>
        <div
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 100px;
            border-left: 1px solid;
            background-color: #fff;
          `}
        >
          <div
            className={css`
              cursor: pointer;
            `}
            forwardRef={closeNetworkDetailPipeline}
          >
            X
          </div>
          <div>selected row data</div>
          <div>{(void 0, props.selectedRowId)}</div>
        </div>
      </Show>
    </div>
  );
}

export default Table;
