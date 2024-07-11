// JavaScriptda Parent, Children & Sibling elementlar uchun masala
// 1. Parent Elementni Topish
// Shart: Berilgan elementning parent elementini toping.
const elChild = document.querySelector('.child');
const parend = elChild.parentElement;
console.log(parend);
// 2. Children Elementlarni Topish
// Shart: Berilgan elementning barcha children elementlarini toping.
const elParend = document.querySelector('.parend');
const allChild = elParend.children;
console.log(allChild);
// 3. Keyingi Sibling Elementni Topish
// Shart: Berilgan elementning keyingi sibling elementini toping.
const elItemChild = document.querySelector('.itemChildd');
const SiblingElelemnt = elItemChild.nextElementSibling;
console.log(SiblingElelemnt);
// 4.Oldingi Sibling Elementni Topish
// Shart: Berilgan elementning oldingi sibling elementini toping.
const elItemChildd = document.querySelector('.itemChildd');
const SiblingElelemntt = elItemChild.previousElementSibling;
console.log(SiblingElelemntt);
// 5.Parent Elementiga Class Qo'shish
// Shart: Berilgan elementning parent elementiga yangi class qo'shing.
const elChildd = document.querySelector('.child');
const parendd = elChild.parentElement;
parendd.classList.add('newParedn');
// 6.Children Elementlariga Class Qo'shish
// Shart: Berilgan elementning barcha children elementlariga yangi class qo'shing.
const elParen = document.querySelector('.parend');
const allChil = elParend.children;
const arrays = Array.from(allChil);
console.log(arrays);
arrays.forEach(e => {
	console.log(e);
	e.classList.add('newChild');
});
// 7.Parent Elementni O'chirish
// Shart: Berilgan elementning parent elementini o'chirib tashlang.
const elItemCHild = document.querySelector('.newItem');
const listParend = elItemCHild.parentElement;
const elBtn = document.querySelector('.btn');
elBtn.addEventListener('click', () => {
	listParend.remove();
});

// 8. Children Elementlarni O'chirish
// Shart: Berilgan elementning barcha children elementlarini o'chirib tashlang.
// 9.Keyingi Sibling Elementni O'chirish
// Shart: Berilgan elementning keyingi sibling elementini o'chirib tashlang.
// 10.Oldingi Sibling Elementni O'chirish
// Shart: Berilgan elementning oldingi sibling elementini o'chirib tashlang.
// 11. Parent Elementga Text Qo'shish
// Shart: Berilgan elementning parent elementiga matn qo'shing.
// 12.Children Elementlarga Text Qo'shish
// Shart: Berilgan elementning barcha children elementlariga matn qo'shing.
// 13.Sibling Elementlarga Text Qo'shish
// Shart: Berilgan elementning barcha sibling elementlariga matn qo'shing.
// 14.Parent Elementni Style O'zgartirish
// Shart: Berilgan elementning parent elementining CSS style ni o'zgartiring.
// 15.Children Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha children elementlarining CSS style ni o'zgartiring.
// 16.Sibling Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha sibling elementlarining CSS style ni o'zgartiring.
// 17.Sibling Elementlarga Attribute Qo'shish
// Shart: Berilgan elementning barcha sibling elementlariga yangi attribute qo'shing.
// 18. Parent Elementdan Attribute O'chirish
// Shart: Berilgan elementning parent elementidan attribute ni o'chiring.
// 19.Sibling Elementlardan Attribute O'chirish
// Shart: Berilgan elementning barcha sibling elementlaridan attribute ni o'chiring.
// 20.Children Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha children elementlarining CSS style ni o'zgartiring.
