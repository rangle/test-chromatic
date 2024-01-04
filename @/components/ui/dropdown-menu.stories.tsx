import type { Meta } from "@storybook/react";

import React, { FC } from "react";

type Variant = "primary" | "secondary" | "tertiary";

type DummyComponentProps = {
  variant?: Variant;
};

const DummyComponent: FC<DummyComponentProps> = ({ variant }) => {
  return (
    <div>
      "this is a test: {variant ?? "0002.2 (first change one more time)"}"
    </div>
  );
};

export const Primary: Meta<any> = {
  render: () => {
    return <DummyComponent />;
  },
};

const meta: Meta<typeof DummyComponent> = {
  component: DummyComponent,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", undefined],
      control: { type: "radio" },
    },
  },
};

export default meta;
