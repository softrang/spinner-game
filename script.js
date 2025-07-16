const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const pointsDisplay = document.getElementById('points');
const pointer = document.querySelector('.pointer');
const segments = document.querySelectorAll('.segment');

let currentRotation = 0;
const segmentCount = segments.length;
const degreesPerSegment = 360 / segmentCount;

const colors = [
  '#C0392B', 
  '#27AE60', 
  '#2980B9', 
  '#F1C40F', 
  '#8E44AD', 
  '#1ABC9C', 
  '#E67E22', 
  '#BDC3C7', 
  '#FF69B4', 
  '#34495E'  
];


segments.forEach((segment, index) => {
  const rotation = degreesPerSegment * index;
  segment.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  segment.style.backgroundColor = colors[index % colors.length];
});


spinBtn.addEventListener('click', () => {
  const extraRotations = 5; 
  const randomDegrees = Math.floor(Math.random() * 360);
  currentRotation += (extraRotations * 360) + randomDegrees;


  wheel.style.transform = `rotate(${currentRotation}deg)`;


  setTimeout(() => {
    const rect = pointer.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;

    const winningElement = document.elementFromPoint(targetX, targetY);

    if (winningElement?.classList.contains('segment')) {
      const wonPoints = winningElement.textContent.trim();
      pointsDisplay.textContent = wonPoints;
    } else {
      pointsDisplay.textContent = 'Try Again';
    }
  }, 4000); 
});
