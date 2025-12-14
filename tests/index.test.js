import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { describe, it, expect } from 'vitest';

const html = readFileSync('index.html', 'utf8');

const createDom = () =>
  new JSDOM(html, {
    resources: 'usable',
    runScripts: 'dangerously',
    url: 'http://localhost'
  });

describe('idea form', () => {
  it('clears the message after saving so users can enter a new idea', () => {
    const dom = createDom();
    const { document, localStorage } = dom.window;

    document.getElementById('name').value = '테스터';
    document.getElementById('role').value = '데이터 엔지니어';
    document.getElementById('message').value = '첫 메모';

    document.getElementById('submitIdea').dispatchEvent(new dom.window.Event('click'));

    expect(localStorage.getItem('neo4j-cypher-idea')).toContain('첫 메모');
    expect(document.getElementById('message').value).toBe('');
  });
});

describe('faq toggle', () => {
  it('marks clicked items as active and updates open/closed labels', () => {
    const dom = createDom();
    const { document } = dom.window;

    const faqItems = Array.from(document.querySelectorAll('.faq-item'));
    const [initialActive, targetItem] = faqItems;

    targetItem.querySelector('.faq-title').dispatchEvent(new dom.window.Event('click', { bubbles: true }));

    expect(targetItem.classList.contains('active')).toBe(true);
    expect(targetItem.querySelector('.faq-title span').textContent).toBe('열림');
    expect(initialActive.classList.contains('active')).toBe(false);
    expect(initialActive.querySelector('.faq-title span').textContent).toBe('닫힘');
  });
});
