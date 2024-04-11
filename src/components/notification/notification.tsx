import { Notifications } from '@/utils/typings';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = { notification: Notifications };
const Notification = ({ notification }: Props) => {
  return (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4 bg-white '>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none uppercase'>
          Notifications
        </h4>
        <Separator className='my-2 bg-dark-600' />

        {notification?.map((tag) => (
          <div key={tag.id}>
            <div className='text-sm truncate hover:bg-warning-200 cursor-pointer'>
              {tag.notificationClip}
            </div>
            <Separator className='my-2' />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
export default Notification;
