const Invitation = () => {
  return (
    <div className="max-w-[600px] mx-auto bg-white shadow-lg p-8 md:p-12" dir="rtl">
      {/* בס"ד in top right */}
      <div className="text-right mb-6">
        <span className="text-xl font-light">בס״ד</span>
      </div>

      {/* Song of Songs Quote */}
      <div className="text-center mb-8">
        <p className="text-lg italic text-gray-600 leading-relaxed">
          "אני לדודי ודודי לי"
          <br />
          <span className="text-sm">שיר השירים ו, ג</span>
        </p>
      </div>

      {/* Names */}
      <div className="text-center mb-8">
        <h1 className="text-[3.5em] font-light leading-tight">
          אופיר & עומר
        </h1>
      </div>

      {/* Intro */}
      <div className="text-center mb-10">
        <p className="text-xl text-gray-700 leading-relaxed">
          נרגשים להזמינכם לחגוג איתנו
          <br />
          את יום החתונה שלנו
        </p>
      </div>

      {/* Date Section */}
      <div className="text-center mb-10 py-6 border-y border-gray-200">
        <div className="mb-3">
          <p className="text-2xl font-light">ח׳ בניסן תשפ״ו</p>
        </div>
        <div>
          <p className="text-xl text-gray-600">26.03.2026</p>
        </div>
      </div>

      {/* Location */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-light mb-4">גן האירועים 58</h2>
        <p className="text-lg text-gray-600">
          הירקונים 58, פתח תקווה
        </p>
      </div>

      {/* Timeline */}
      <div className="text-center mb-10 space-y-3">
        <div className="flex justify-center items-center gap-4">
          <span className="text-lg">19:30</span>
          <span className="text-lg">-</span>
          <span className="text-lg">קבלת פנים</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-lg">20:30</span>
          <span className="text-lg">-</span>
          <span className="text-lg">חופה וקידושין</span>
        </div>
      </div>

      {/* Parents Section */}
      <div className="grid grid-cols-2 gap-8 mb-10 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">משפחת</p>
          <p className="text-lg">שמש</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">משפחת</p>
          <p className="text-lg">לוי</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-gray-200">
        <p className="text-2xl font-light text-gray-700">
          נשמח לראותכם
        </p>
      </div>
    </div>
  );
};

export default Invitation;
