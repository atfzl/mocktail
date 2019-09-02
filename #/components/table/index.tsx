import { NetworkRow } from '#/interfaces';
import { css } from 'emotion';
import { For } from 'solid-js/dom';
import { TBodyRowStyles, TdStyles, ThStyles } from './styles';

interface Props {
  rows: NetworkRow[];
}

function Table(props: Props) {
  return (
    <div className={css``}>
      <table
        className={css`
          border-spacing: 0;
          width: 100%;
        `}
      >
        <thead>
          <tr className={css``}>
            <th className={ThStyles}>Name</th>
            <th className={ThStyles}>Method</th>
            <th className={ThStyles}>Status</th>
            <th className={ThStyles}>Data</th>
            <th className={ThStyles}>Time</th>
          </tr>
        </thead>
        <tbody className={css``}>
          <For each={(void 0, props.rows)}>
            {row => (
              <tr className={TBodyRowStyles}>
                <td className={TdStyles}>{row.request.url}</td>
                <td className={TdStyles}>{row.request.method}</td>
                <td className={TdStyles}>
                  {row.response ? row.response.status : '-'}
                </td>
                <td className={TdStyles}>
                  {row.response ? row.response.data : '-'}
                </td>
                <td className={TdStyles}>3s</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
