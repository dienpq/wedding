'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  typographyVariants,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  relation: z.string().optional(),
  confirm: z.string().optional(),
  amount: z.string().min(1, {
    message: 'Username must be at least 2 characters.',
  }),
  content: z.string().optional(),
});

export const SendWishes = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      relation: '',
      confirm: 'yes',
      amount: '',
      content: '',
    },
  });

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const onSubmit = (data: z.infer<typeof FormSchema>) => {};

  return (
    <section className="p-10 bg-image-['/images/home/send-wishes/bg.jpg']">
      <Card className="w-[550px] p-8">
        <CardHeader>
          <CardTitle
            className={cn(
              'text-center font-normal uppercase text-beige-rose',
              typographyVariants({ variant: 'h6' }),
            )}
          >
            Bạn sẽ tham dự chứ?
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-white"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Tên" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relation"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Quan hệ" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Người thân">Người thân</SelectItem>
                        <SelectItem value="Bạn bè">Bạn bè</SelectItem>
                        <SelectItem value="Hàng xóm">Hàng xóm</SelectItem>
                        <SelectItem value="Đồng nghiệp">Đồng nghiệp</SelectItem>
                        <SelectItem value="Xã hội">Xã hội</SelectItem>
                        <SelectItem value="Khác">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-x-8"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Đúng, tôi tham gia
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Xin lỗi, tôi không thể đến
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Số người tham dự"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea rows={4} placeholder="Lời chúc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full bg-olive-gray"
                >
                  Gửi lời chúc
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
