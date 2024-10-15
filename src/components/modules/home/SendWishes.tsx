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
    <section className="mt-20 p-10 bg-image-['/images/home/send-wishes/bg.jpg']">
      <Card className="w-[600px] p-8">
        <CardHeader>
          <CardTitle
            className={cn('text-center', typographyVariants({ variant: 'h3' }))}
          >
            Bạn sẽ tham dự chứ?
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
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
                    <FormLabel>Tên</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Bạn có thể cho tôi biết tên của bạn được không?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quan hệ</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Mối quan hệ giữa bạn và chúng tôi là gì nhỉ?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
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
                        className="flex flex-col space-y-1"
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
                    <FormLabel>Số người tham dự</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Hãy cho tôi biết số người tham dự cùng với bạn"
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
                    <FormLabel>Lời chúc</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Cảm ơn bạn đã gửi đến chúng tôi những lời chúc tốt đẹp nhất!"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center">
                <Button type="submit" size="lg" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
