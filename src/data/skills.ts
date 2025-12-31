export interface Skill {
    name: string;
    icon?: string;
    iconClass?: string;
}

export interface SkillCategory {
    key: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        key: 'programming',
        icon: 'code',
        skills: [
            { name: 'Java', iconClass: 'fab fa-java' },
            { name: 'JavaScript', iconClass: 'fab fa-js' },
            { name: 'C++', iconClass: 'fas fa-code' },
            { name: 'Python', iconClass: 'fab fa-python' },
            { name: 'HTML5/CSS3', iconClass: 'fab fa-html5' },
        ],
    },
    {
        key: 'frameworks',
        icon: 'layers',
        skills: [
            { name: 'Spring Boot', icon: '/icons/spring.svg' },
            { name: 'Node.js', iconClass: 'fab fa-node-js' },
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Next.js', icon: '/icons/nextjs.svg' },
            { name: 'NestJS', icon: '/icons/nestjs.svg' },
        ],
    },
    {
        key: 'database',
        icon: 'database',
        skills: [
            { name: 'MySQL', icon: '/icons/mysql.svg' },
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'Firebase', icon: '/icons/firebase.svg' },
        ],
    },
    {
        key: 'tools',
        icon: 'wrench',
        skills: [
            { name: 'Git', iconClass: 'fab fa-git-alt' },
            { name: 'Docker', iconClass: 'fab fa-docker' },
            { name: 'JMeter', icon: '/icons/jmeter.svg' },
            { name: 'Postman', icon: '/icons/postman.svg' },
            { name: 'Swagger', icon: '/icons/swagger.svg' },
        ],
    },
];
