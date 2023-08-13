import { useParams } from "react-router-dom";
import work from "../../data/projects.json";

export default function Locations() {
  const params = useParams();
  const projects = work.find((projects) => projects.id === params.id);
  const slidePics = projects && projects.pictures;
  const tags = projects && projects.tags;
  const equipments = projects && projects.equipments;
  const listEquipments =
    projects &&
    equipments.map((item, index) => (
      <li
        key={index}
        className="listEquipments">
        {item}
      </li>
    ));

  return (
    projects && (
      <div
        key={params.id}
        className="location">
        <section className="location__container">
          <div className="location__container-tags-title">
            <div className="location__title">
              <h1>{projects.title}</h1>
              <h3>{projects.location}</h3>
            </div>
            <div className="location__tags">
              {tags.map((tags) => (
                <Tag
                  key={tags}
                  tag={tags}
                />
              ))}
            </div>
          </div>
          <div className="location__host-rating">
            <div className="location__host">
              <Host
                hostName={projects.host.name}
                hostPic={projects.host.picture}
              />
            </div>
            <div className="location__rating">
              <Rating score={projects.rating} />
            </div>
          </div>
        </section>
        <div className="location__dropdown">
          <div className="location__dropdown-des">
            <Dropdown
              aboutTitle="Description"
              aboutText={projects.description}
            />
          </div>
          <div className="location__dropdown-eqp">
            <Dropdown
              aboutTitle="Équipements"
              aboutText={listEquipments}
            />
          </div>
        </div>
      </div>
    )
  );
}
