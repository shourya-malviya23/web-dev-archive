export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="#3498db"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Carribean"
        />

        <MoodBoardItem
          color="#3442db"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Thailand"
        />

        <MoodBoardItem
          color="#3483ab"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Shanghai"
        />
      </div>
    </div>
  );
}
