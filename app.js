const modals = { upload: document.querySelector('#upload-modal'), live: document.querySelector('#live-modal') };
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => {
  const modal = modals[button.dataset.open];
  if (modal) { modal.hidden = false; document.body.style.overflow = 'hidden'; }
}));
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => {
  button.closest('.modal-wrap').hidden = true; document.body.style.overflow = '';
}));
document.querySelectorAll('.modal-wrap').forEach((wrap) => wrap.addEventListener('click', (event) => {
  if (event.target === wrap) { wrap.hidden = true; document.body.style.overflow = ''; }
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.querySelectorAll('.modal-wrap').forEach((wrap) => { wrap.hidden = true; document.body.style.overflow = ''; });
});

const file = document.querySelector('#file');
const declare = document.querySelector('#declare');
const submit = document.querySelector('#demo-submit');
const filename = document.querySelector('#filename');
function syncUpload() { submit.disabled = !(file.files.length && declare.checked); }
file.addEventListener('change', () => { filename.textContent = file.files[0]?.name || '閫夋嫨 AI 鍥剧墖鎴栬棰?; syncUpload(); });
declare.addEventListener('change', syncUpload);
submit.addEventListener('click', () => {
  document.querySelector('#upload-message').textContent = '婕旂ず鎻愪氦鎴愬姛锛氫綔鍝佸凡杩涘叆 AI 鍐呭瀹℃牳闃熷垪銆?;
  submit.disabled = true;
});
document.querySelector('#live-demo').addEventListener('click', () => {
  document.querySelector('#live-message').textContent = '婕旂ず鐢宠宸蹭繚瀛橈細璇峰畬鎴愬垱浣滆€呰璇佸悗寮€鎾€?;
});

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  const filter = button.dataset.filter;
  document.querySelectorAll('.work').forEach((card) => { card.hidden = filter !== 'all' && card.dataset.kind !== filter; });
}));
