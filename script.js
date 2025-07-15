const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const pointsDisplay = document.getElementById('points');

let currentRotation = 0;
const segments = document.querySelectorAll('.segment');
const degreesPerSegment = 360 / segments.length;

const colors = [
  '#C0392B',
  '#27AE60',
  '#2980B9',
  '#F1C40F',
  '#8E44AD',
  '#1ABC9C',
  '#E67E22',
  '#BDC3C7'
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
    const boundingBox = wheel.getBoundingClientRect();
    const centerX = boundingBox.left + boundingBox.width / 2;
    const centerY = boundingBox.top + boundingBox.height / 2;

    const offsetX = 0;
    const offsetY = 50;

    const targetX = centerX + offsetX;
    const targetY = centerY - offsetY;

    const winningElement = document.elementFromPoint(targetX, targetY);

    if (winningElement && winningElement.classList.contains('segment')) {
      const wonPoints = winningElement.textContent;
      pointsDisplay.textContent = `${wonPoints}`;
      console.log('Winner:', wonPoints);
    } else {
      pointsDisplay.textContent = 'Try Again';
    }
  }, 4000);

});
