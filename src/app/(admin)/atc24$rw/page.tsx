"use client";
import { toast } from "sonner"
import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/admin";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isPending, startTransition] = useTransition();

  const { push } = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    const { email, password } = values;
    startTransition(() => {
      login(email, password).then((data) => {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          push("/atc24$rw/admin");
        }
        if(data.error){ 
          toast.warning(data.error)
        }
      }).catch(() => toast.error('Ocurrió un error'))
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-8">
      <h1 className="font-bold text-4xl">Iniciar sesión</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="Correo electrónico" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="Contraseña" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-primary-lm hover:bg-red-600 dark:text-white" disabled={isPending}>
            {!isPending ? (
              "Ingresar"
            ) : (
              <ImSpinner2 size={20} className="animate-spin h-5 w-5" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default LoginPage;
