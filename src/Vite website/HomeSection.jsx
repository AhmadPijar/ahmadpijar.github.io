import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileSearch, Layers3, Sparkles } from 'lucide-react';
import { StoryBlock, InfoPill } from '../newComponent';

const HomeSection = () => {
  const navigate = useNavigate();

  const focusAreas = [
    { label: 'WHAT I HAVE SEEN', value: 'Manual records, scattered requests, repetitive checks' },
    { label: 'WHAT I LIKE TO EXPLORE', value: 'Spreadsheets, simple automation, structured workflows' },
    { label: 'WHAT I AM BUILDING', value: 'Clearer documentation, practical tools, stronger digital habits' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <StoryBlock
        eyebrow="WORK, PROJECTS & JOURNAL"
        title="Learning through work, building through problems."
        description="This portfolio is a record of my work experience, practical projects, and the things I have learned along the way — from warehouse operations and administration to using simple digital tools to make everyday work easier to follow."
        className="bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#f5f7fb_100%)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 rounded-[24px] border border-slate-200 bg-white/80 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              <Sparkles size={14} className="text-sky-600" />
              How I approach work
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              I usually notice the small things that make work harder than it should be — repeated data entry, requests that get lost, or a process that depends too much on memory.
            </h3>
            <p className="text-base leading-7 text-slate-600">
              Some of the projects in this portfolio started from those moments. I began experimenting with spreadsheets, Apps Script, and simple web tools to see whether some of these small problems could be handled in a simpler, more
              structured way.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explore the cases <ArrowRight size={16} />
              </button>
              <button onClick={() => navigate('/about')} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Read my journey
              </button>
            </div>
          </div>

          <div className="grid gap-3">
            {focusAreas.map((item) => (
              <InfoPill key={item.label} label={item.label} value={item.value} tone={item.label === 'WHAT I AM BUILDING' ? 'success' : item.label === 'WHAT I LIKE TO EXPLORE' ? 'accent' : 'default'} />
            ))}
          </div>
        </div>
      </StoryBlock>

      <StoryBlock eyebrow="A Few Things I Have Built" title="Some of these projects started from simple problems I encountered at work. Others were built while I was learning and experimenting with digital tools.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <FileSearch size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Requisition Worksheet</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A small project that started from a simple problem: keeping track of item requests coming from different channels. I wanted one place to collect them so the process was easier to follow.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <Layers3 size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Input Ledger</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              An experiment in turning repetitive manual entries into a more organized digital record. It helped me keep information easier to trace without depending on memory or scattered notes.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Compare Automation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A small comparison tool I built to reduce repetitive checking when comparing records. It was simple, practical, and useful when I needed to spot differences quickly.</p>
          </div>
        </div>
      </StoryBlock>
    </div>
  );
};

export default HomeSection;
