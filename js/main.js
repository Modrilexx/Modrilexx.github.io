const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const email = "mm2887@njit.edu";

// AI Readiness Score form (if present)
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (leadForm.elements["name"]?.value || "").trim();
    const workflow = (leadForm.elements["workflow"]?.value || "").trim();
    const goal = (leadForm.elements["goal"]?.value || "").trim();

    const subject = encodeURIComponent("AI Readiness Score Request");
    const body = encodeURIComponent(
      `Hi Mopik Automation,\n\nI want to claim an AI Readiness Score.\n\nBusiness/Channel: ${name}\nCurrent promo workflow: ${workflow}\nGoal: ${goal}\n\nThanks!`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

// Free Automation Audit form
const auditForm = document.getElementById("auditForm");
if (auditForm) {
  auditForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (auditForm.elements["name"]?.value || "").trim();
    const current = (auditForm.elements["current"]?.value || "").trim();
    const want = (auditForm.elements["want"]?.value || "").trim();

    const subject = encodeURIComponent("Free Automation Audit Request");
    const body = encodeURIComponent(
      `Hi Mopik Automation,\n\nI'd like a free automation audit.\n\nBusiness/Channel: ${name}\nWhat I do now: ${current}\nWhat I want automated: ${want}\n\nThanks!`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
