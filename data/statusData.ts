import {
    CheckIcon,
    Cross2Icon,
    QuestionMarkIcon
  } from "@radix-ui/react-icons"

export const statuses = [
    {
      value: "OPEN",
      label: "OPEN",
      icon: QuestionMarkIcon,
    },
    {
      value: "ACCEPTED",
      label: "ACCEPTED",
      icon: CheckIcon,
    },
    {
      value: "DECLINED",
      label: "DECLINED",
      icon: Cross2Icon,
    }
  ]