"use client";

import { Cards, ListChecks, Stack } from "@phosphor-icons/react";

const icons = {
  cards: Cards,
  checklist: ListChecks,
  stack: Stack,
};

export function StepIcon({ name }) {
  const Icon = icons[name];

  return <Icon size={70} weight="thin" aria-hidden="true" />;
}
