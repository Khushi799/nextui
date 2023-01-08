import React from "react";
import {Grid} from "@nextui-org/grid";

import {Link} from "../src";

export default {
  title: "Navigation/Link",
  component: Link,
};

const text = `"First solve the problem. Then, write the code." - Jon Johnson.`;

export const Default = () => <Link href="#">{text}</Link>;

export const Sizes = () => (
  <Grid.Container gap={1}>
    <Grid xs={12}>
      <Link color="primary" href="#" size="xs">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="secondary" href="#" size="sm">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="success" href="#" size="md">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="warning" href="#" size="xl">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link className="text-2xl" color="error" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link className="text-3xl text-pink-500" href="#">
        {text}
      </Link>
    </Grid>
  </Grid.Container>
);

export const Colors = () => (
  <Grid.Container gap={1}>
    <Grid xs={12}>
      <Link color="primary" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="secondary" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="success" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="warning" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link color="error" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link className="text-teal-600" href="#">
        {text}
      </Link>
    </Grid>
  </Grid.Container>
);

export const isUnderline = () => (
  <Link isUnderline color="primary" href="#">
    {text}
  </Link>
);

export const isExternal = () => (
  <Grid.Container gap={1}>
    <Grid xs={12}>
      <Link isExternal href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isExternal color="secondary" href="#">
        {text}
      </Link>
    </Grid>
  </Grid.Container>
);

export const isBlock = () => (
  <Grid.Container gap={1}>
    <Grid xs={12}>
      <Link isBlock color="primary" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isBlock color="secondary" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isBlock color="success" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isBlock color="warning" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isBlock color="error" href="#">
        {text}
      </Link>
    </Grid>
    <Grid xs={12}>
      <Link isBlock className="text-pink-600 hover:after:bg-pink-600/25" href="#">
        {text}
      </Link>
    </Grid>
  </Grid.Container>
);