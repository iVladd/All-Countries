interface InfoItemProps {
  label: string;
  data: string | string[] | number;
}

const InfoItem = ({ label, data = "No data" }: InfoItemProps) => {
  return (
    <p>
      <span className="font-bold">{label}: </span>
      {Array.isArray(data) ? (
        data.map((i) => <span key={i}>{i + " "}</span>)
      ) : (
        <span>{data}</span>
      )}
    </p>
  );
};

export default InfoItem;
