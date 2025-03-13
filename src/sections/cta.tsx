import { GradientButton } from '@/components/gradient-border-button';
import { Ripple } from '@/components/magicui/ripple';

const Cta = () => {
  return (
    <section className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <a href="https://superprofile.bio/view_ch/9014f1ed-3c98-4faf-8e7c-0b90f13fe62e">
        <GradientButton>Buy now</GradientButton>
      </a>
      <Ripple />
    </section>
  );
};

export default Cta;
