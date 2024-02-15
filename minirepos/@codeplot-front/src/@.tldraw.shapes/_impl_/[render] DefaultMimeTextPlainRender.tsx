import { ICodeplotShape } from "./ICodeplotShape";

type IDefaultMimeTextPlainRenderProps = {
  shape: ICodeplotShape;
};

export function DefaultMimeTextPlainRender({
  shape,
}: IDefaultMimeTextPlainRenderProps) {
  return (
    <div className="overflow-auto bg-[var(--codeplot-surface2-backgroundColor)] w-full h-full p-2">
      <pre>{shape.props.mime["text/plain"]}</pre>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <h1>Hello world</h1>
    </div>
  );
}
