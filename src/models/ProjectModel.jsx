class Project {
  constructor(id, title, description, techniques = [], image = "", githubLink) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.techniques = techniques;
    this.image = image;
    this.githubLink = githubLink;
  }
}

export default Project;
