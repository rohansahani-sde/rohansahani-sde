const ProfileCard = ({ platform, name, username, profileImg, flag, url, badges }) => (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm">
      <div className="flex items-center gap-4">
        <img src={profileImg} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-semibold">{name} <span>{flag}</span></h2>
          <p className="text-gray-600">@{username}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            View on {platform}
          </a>
        </div>
      </div>
      {badges?.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Badges</h3>
          <div className="flex gap-3">
            {badges.map((badge, index) => (
              <div key={index} className="bg-orange-100 px-3 py-2 rounded-lg text-sm text-orange-800">
                ⭐ {badge}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
  export default ProfileCard;
