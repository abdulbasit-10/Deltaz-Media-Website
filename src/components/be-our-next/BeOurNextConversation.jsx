import conversationImage from "../../assets/Unscripted Conversation.png";

function BeOurNextConversation() {
  return (
    <section className="bg-[#032D31] px-5 py-14 font-['Manrope'] text-white sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[840px] items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[10px]">
          <img
            src={conversationImage}
            alt="Guest sharing a conversation in a podcast studio"
            className="aspect-[1.15/1] w-full object-cover"
          />
        </div>

        <div>
          <span className="inline-flex rounded-full bg-[#17494C] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00C5B5]">
            Authentic Dialogues
          </span>
          <h2 className="mt-4 font-['Arimo'] text-[clamp(21px,3vw,27px)] font-bold leading-[1.12]">
            Come With an Opinion And Leave With a Conversation Worth Sharing.
          </h2>
          <h3 className="mt-4 font-['Arimo'] text-[12px] font-bold leading-[1.4] text-[#00D0BE] sm:text-[13px]">
            Because the Best Business Conversations Aren&apos;t Scripted
          </h3>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">
            We&apos;re interested in the conversations that reveal something real. The decisions behind the growth. The failures behind the lessons. The thinking behind the strategy. The person behind the title.
          </p>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">
            We talk about entrepreneurship, leadership, business, personal branding, marketing, innovation, building in the UAE, entering new markets, overcoming setbacks, and the experiences that shape the people building today&apos;s businesses.
          </p>
          <p className="mt-4 font-['Arimo'] text-[10px] font-bold leading-[1.5] text-[#00D0BE] sm:text-[11px]">
            Come with your expertise. Bring your stories. We&apos;ll take care of the conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeOurNextConversation;
