export default function PlaceTree({ id, placesById, onComplete, parentId }) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title} <button onClick={() => onComplete(parentId, id)}>Complete</button>
            {childIds.length > 0 && (
                <ol>
                    {
                        childIds.map(id => <PlaceTree key={id} id={id} placesById={placesById} onComplete={onComplete} parentId={parentId} />)
                    }
                </ol>
            )}
        </li>
    );
}