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
file.addEventListener('change', () => { filename.textContent = file.files[0]?.name || '选择 AI 图片或视频'; syncUpload(); });
declare.addEventListener('change', syncUpload);
submit.addEventListener('click', () => {
  document.querySelector('#upload-message').textContent = '演示提交成功：作品已进入 AI 内容审核队列。';
  submit.disabled = true;
});
document.querySelector('#live-demo').addEventListener('click', () => {
  document.querySelector('#live-message').textContent = '演示申请已保存：请完成创作者认证后开播。';
});

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  const filter = button.dataset.filter;
  document.querySelectorAll('.work').forEach((card) => { card.hidden = filter !== 'all' && card.dataset.kind !== filter; });
}));
