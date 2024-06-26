document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const dropZones = document.querySelectorAll('.drop-zone');
  const unrankedZone = document.getElementById('unranked-drop-zone');

  items.forEach(item => {
    item.setAttribute('draggable', true);

    item.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.id);
    });

    item.addEventListener('dblclick', () => {
      if (item.parentElement !== unrankedZone) {
        unrankedZone.appendChild(item);
      }
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      const itemId = event.dataTransfer.getData('text/plain');
      const draggedItem = document.getElementById(itemId);
      if (draggedItem && draggedItem.parentElement !== zone) {
        zone.appendChild(draggedItem);
      }
    });
  });
});
