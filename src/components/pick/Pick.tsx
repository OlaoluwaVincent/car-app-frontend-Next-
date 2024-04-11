'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
  label: string;
  id: string;
};
const Pick = (props: Props) => {
  const [date, setDate] = useState<Date>();
  const [Time, setTime] = useState('');
  const [location, setLocation] = useState('');
  return (
    <div className='w-full flex flex-col gap-2 lg:gap-4 px-2 lg:px-4 py-3 bg-white border border-black-200 rounded-xl'>
      <aside>
        <input type='radio' name='pick' id={props.id} />
        <label
          htmlFor={props.id}
          className='ml-2 font-bold text-base md:text-lg capitalize'
        >
          {props.label}
        </label>
      </aside>
      <div className='flex gap-3 md:gap-[24px] justify-between w-full'>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h3 className='font-bold text-sm md:text-base'>Location</h3>
          <div>
            <select name='location' id='' className='text-sm md:text-base'>
              <option defaultValue='default'>Location</option>
              <option value='one'>One</option>
              <option value='two'>Two</option>
              <option value='three'>Three</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <Popover>
            <h3 className='font-bold text-sm md:text-base'>Date</h3>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-fit justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? format(date, 'PPP') : <span>Select your date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h3 className='font-bold text-sm md:text-base'>Time</h3>
          <div>
            <select name='location' id='' className='text-sm md:text-base'>
              <option defaultValue='default'>Time</option>
              <option value='one'>One</option>
              <option value='two'>Two</option>
              <option value='three'>Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pick;
