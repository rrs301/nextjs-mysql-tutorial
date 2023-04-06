/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    'MYSQL_HOST': 'tubeguruji.com',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': "u724180508_online_tuto",
    'MYSQL_USER': "u724180508_online_tuto",
    'MYSQL_PASSWORD': "#Rahul123",
  }
}
