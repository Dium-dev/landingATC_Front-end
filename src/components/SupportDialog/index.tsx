"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
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
import { sendSupportMessage } from "@/actions/support";
import { toast } from "sonner";
import { ImSpinner2 } from "react-icons/im";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre no es válido" }),
  email: z.string().email({ message: "El correo no es válido" }),
  message: z.string().min(30, { message: "El mensaje es muy corto" }),
});

export const SupportDialog = () => {
  const { open, onClose } = useSupportDialogStore();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => {
      sendSupportMessage(values)
        .then(({ success, error }) => {
          if (success) {
            toast.success(success);
            form.reset();
            onClose();
          }
          if (error) {
            toast.error(error);
          }
        })
        .catch(({ error }) => {
          toast.error(error);
        });
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="px-10 md:py-8 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold mb-2">
            Contacto
          </DialogTitle>
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
                    <Input
                      className="bg-rose-100 dark:bg-secondary-dm border-none"
                      placeholder="Nombre"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="dark:text-primary-lm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-rose-100 dark:bg-secondary-dm border-none"
                      placeholder="Correo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="dark:text-primary-lm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="min-h-[150px] max-h-[270px] bg-rose-100 dark:bg-secondary-dm border-none"
                      placeholder="Mensaje"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="dark:text-primary-lm" />
                </FormItem>
              )}
            />
            <Button className="w-full bg-primary-lm py-6 text-base dark:text-white dark:hover:bg-secondary-dm">
              {isPending ? (
                <ImSpinner2 size={20} className="animate-spin h-5 w-5" />
              ) : (
                "ENVIAR"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
