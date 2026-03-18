import GithubIcon from '@/components/utils/icons/GithubIcon.astro'
import CalendarIcon from '@/components/utils/icons/CalendarIcon.astro'
import HackerIcon from '@/components/utils/icons/HackerIcon.astro'
import LinkedInIcon from '@/components/utils/icons/LinkedInIcon.astro'

export const CODE_LINKS_LIST = [
    {
        head: 'Github',
        content: 'github/yoswell',
        link: 'https://github.com/yoswell',
        icon: GithubIcon,
    },
    {
        head: 'Hack The Box',
        content: 'htb/users/vishok',
        link: 'https://www.hackthebox.com/users/vishok',
        icon: HackerIcon,
    },
    {
        head: 'Luma',
        content: 'luma/yosweldev',
        link: 'https://luma.dev/yosweldev',
        icon: CalendarIcon,
    }
]

export const SOCIAL_LINKS_LIST = [
    {
        head: 'LinkedIn',
        content: 'linkedin/in/yoswel',
        link: 'https://linkedin.com/in/yoswel',
        icon: LinkedInIcon,
    }
]