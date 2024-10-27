import React from "react";

interface IPageHeader {
  page: string;
  primaryAction?: JSX.Element;
  secondaryActions?: JSX.Element[];
}

export function PageHeader({
  page,
  primaryAction,
  secondaryActions,
}: IPageHeader) {
  return (
    <section className="container py-10 flex items-center justify-between">
      <div className="w-full flex items-center gap-7">
        <h1 className="font-bold text-2xl">{page}</h1>
        {primaryAction ?? null}
      </div>
      <div className="w-full flex items-center justify-end gap-7">
        {React.Children.toArray(secondaryActions)}
      </div>
    </section>
  );
}
