import { css, cx } from 'emotion';

type Props = JSX.HTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={cx(
        className,
        css`
          padding: 8px;
          background-color: white;
          border: 1px solid black;
          cursor: pointer;
        `,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
