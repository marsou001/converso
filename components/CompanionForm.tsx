"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  subject: z.enum(Object.values(Subject)),
  topic: z.string().min(1, "Topic is required."),
  voice: z.string().min(1, "Voice is required."),
  style: z.string().min(1, "Style is required."),
})

export default function CompanionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: Subject.MATHS,
      topic: "",
      voice: "",
      style: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <div>CompanionForm</div>
  )
}