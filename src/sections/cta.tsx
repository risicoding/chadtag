import { GradientButton } from '@/components/gradient-border-button';
import { Ripple } from '@/components/magicui/ripple';
import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg '>
      <GradientButton>Buy now</GradientButton>
<Ripple/>
    </section>
  );
};

export default Cta;
