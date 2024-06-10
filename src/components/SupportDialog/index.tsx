"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSupportDialogStore } from "@/store/useSupportDialog";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export const SupportDialog = () => {
  const { open, onClose } = useSupportDialogStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="px-10 py-8">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold mb-2">Contacto</DialogTitle>
          <DialogDescription>
            ¿Tienes preguntas o necesitas ayuda para tu compra?
          </DialogDescription>
          <DialogDescription>
            ¡Contáctanos! Nuestro equipo está aquí para asistirte.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="bg-rose-100 border-none" placeholder="Nombre" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="bg-rose-100 border-none" placeholder="Correo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="min-h-[150px] max-h-[270px] bg-rose-100 border-none" placeholder="Mensaje" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full bg-primary-lm py-6 text-base">ENVIAR</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
