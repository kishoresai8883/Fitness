import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/gymData';
import { ScheduleItem } from '../types';
import { Calendar, Clock, User, MapPin, Sparkles, Filter, CheckCircle, Flame } from 'lucide-react';

interface ScheduleProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectProgramForTrial }) => {
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const days: { id: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'; label: string }[] = [
    { id: 'Mon', label: 'Monday' },
    { id: 'Tue', label: 'Tuesday' },
    { id: 'Wed', label: 'Wednesday' },
    { id: 'Thu', label: 'Thursday' },
    { id: 'Fri', label: 'Friday' },
    { id: 'Sat', label: 'Saturday' },
    { id: 'Sun', label: 'Sunday' },
  ];

  const filteredSchedule = SCHEDULE_DATA.filter(item => {
    const matchesDay = item.day === selectedDay;
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesDay && matchesCat;
  });

  return (
    <section id="schedule" className="py-20 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Calendar className="w-3.5 h-3.5" /> Weekly Live Class Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            CLASS SCHEDULE & <span className="text-red-500">TIMES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Over 30+ led sessions every week. Filter by day or goal, then reserve your free trial spot in any class.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {days.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDay(d.id)}
              className={`py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedDay === d.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Class List Table / Cards */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-white uppercase">{selectedDay}'s Class Roster</h3>
              <p className="text-xs text-zinc-400">{filteredSchedule.length} sessions scheduled</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Classes' },
                { id: 'strength', label: 'Strength' },
                { id: 'hiit', label: 'HIIT' },
                { id: 'mobility', label: 'Mobility' },
                { id: 'boxing', label: 'Turf' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedCategory(f.id)}
                  className={`py-1 px-3 rounded-lg text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                    selectedCategory === f.id
                      ? 'bg-zinc-800 text-white border border-red-500'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {filteredSchedule.length > 0 ? (
            <div className="divide-y divide-zinc-800/80">
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="py-4 px-3 hover:bg-zinc-900/60 rounded-xl transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Time & Title */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-center shrink-0">
                      <div className="text-xs font-black text-red-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-white uppercase">{item.classTitle}</h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-medium">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-zinc-500" /> {item.instructor}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" /> {item.room}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Spots */}
                  <div className="flex items-center gap-4 ml-auto sm:ml-0">
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {item.spotsLeft} spots left
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectProgramForTrial(item.classTitle)}
                      className="py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Reserve Spot</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No classes match this category filter on {selectedDay}. Try selecting "All Classes".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
