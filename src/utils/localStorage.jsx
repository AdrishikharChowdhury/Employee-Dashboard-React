const initial=()=>{
        const employees = [
    {
        "id": 1,
        "name": "Senku Ishigami",
        "email": "senku.ishigami@stoneworld.com",
        "password": "123",
        "tasks": [
        {
            "title": "Build Water Wheel",
            "description": "Assemble a simple waterwheel to generate energy for the lab.",
            "date": "2025-10-01",
            "category": "Engineering",
            "active": true,
            "new": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Create Glassware",
            "description": "Manufacture beakers and test tubes from locally sourced sand.",
            "date": "2025-09-25",
            "category": "Chemistry",
            "active": false,
            "new": false,
            "completed": true,
            "failed": false
        },
        {
            "title": "Research Antibiotics",
            "description": "Find ingredients and start synthesizing sulfa drugs.",
            "date": "2025-10-02",
            "category": "Medicine",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        }
        ],
        "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 0
        }
    },
    {
        "id": 2,
        "name": "Taiju Oki",
        "email": "taiju.oki@stoneworld.com",
        "password": "123",
        "tasks": [
        {
            "title": "Harvest Wheat",
            "description": "Gather wheat from the fields for food production.",
            "date": "2025-09-28",
            "category": "Agriculture",
            "active": true,
            "new": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Transport Rocks",
            "description": "Move boulders for the construction of new lab.",
            "date": "2025-09-27",
            "category": "Construction",
            "active": false,
            "new": false,
            "completed": true,
            "failed": false
        },
        {
            "title": "Defend Perimeter",
            "description": "Assist Kohaku in patrolling the village borders.",
            "date": "2025-10-01",
            "category": "Security",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        },
        {
            "title": "Setup Campfire",
            "description": "Gather firewood and set up the nightly campfire.",
            "date": "2025-09-30",
            "category": "Survival",
            "active": false,
            "new": false,
            "completed": true,
            "failed": false
        }
        ],
        "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 2,
        "failed": 0
        }
    },
    {
        "id": 3,
        "name": "Yuzuriha Ogawa",
        "email": "yuzuriha.ogawa@stoneworld.com",
        "password": "123",
        "tasks": [
        {
            "title": "Tailor Clothing",
            "description": "Sew new uniforms for the science team.",
            "date": "2025-09-26",
            "category": "Crafting",
            "active": true,
            "new": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Repair Statues",
            "description": "Restore and mend petrified villagers.",
            "date": "2025-09-24",
            "category": "Restoration",
            "active": false,
            "new": false,
            "completed": false,
            "failed": true
        },
        {
            "title": "Organize Materials",
            "description": "Sort and catalog materials in the storeroom.",
            "date": "2025-09-28",
            "category": "Logistics",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        }
        ],
        "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 0,
        "failed": 1
        }
    },
    {
        "id": 4,
        "name": "Gen Asagiri",
        "email": "gen.asagiri@stoneworld.com",
        "password": "123",
        "tasks": [
        {
            "title": "Negotiate Alliance",
            "description": "Convince villagers to join the Kingdom of Science.",
            "date": "2025-10-03",
            "category": "Strategy",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        },
        {
            "title": "Gather Information",
            "description": "Eavesdrop on Tsukasa Empire’s plans.",
            "date": "2025-09-22",
            "category": "Espionage",
            "active": true,
            "new": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Plan Performance",
            "description": "Prepare a magic show for the upcoming feast.",
            "date": "2025-09-30",
            "category": "Entertainment",
            "active": false,
            "new": false,
            "completed": true,
            "failed": false
        },
        {
            "title": "Deceive Enemies",
            "description": "Lead the decoy operation.",
            "date": "2025-09-29",
            "category": "Strategy",
            "active": false,
            "new": false,
            "completed": false,
            "failed": true
        }
        ],
        "taskCount": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 1
        }
    },
    {
        "id": 5,
        "name": "Kohaku",
        "email": "kohaku@stoneworld.com",
        "password": "123",
        "tasks": [
        {
            "title": "Scout Forest",
            "description": "Monitor for intruders in Ishigami forest.",
            "date": "2025-10-01",
            "category": "Reconnaissance",
            "active": true,
            "new": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Combat Training",
            "description": "Conduct daily training with Ginro and Kinro.",
            "date": "2025-09-27",
            "category": "Training",
            "active": false,
            "new": false,
            "completed": true,
            "failed": false
        },
        {
            "title": "Escort Ruri",
            "description": "Safely escort Ruri to the river for water.",
            "date": "2025-10-02",
            "category": "Protection",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        },
        {
            "title": "Test Bridge",
            "description": "Check the new bridge for safety.",
            "date": "2025-09-26",
            "category": "Engineering",
            "active": false,
            "new": true,
            "completed": false,
            "failed": false
        },
        {
            "title": "Track Footprints",
            "description": "Follow unknown tracks near the village entrance.",
            "date": "2025-09-30",
            "category": "Reconnaissance",
            "active": false,
            "new": false,
            "completed": false,
            "failed": true
        }
        ],
        "taskCount": {
        "active": 1,
        "new": 2,
        "completed": 1,
        "failed": 1
        }
    }
    ];

    const admin = [
    {
        "id": 1,
        "name": "Byakuya Ishigami",
        "email": "byakuya.ishigami@stoneworld.com",
        "password": "123"
    }
    ];

    return {employees,admin};
}

export const setLocalStorage = (employees, admin) => {

    if ((!employees || employees.length === 0) && (!admin || admin.length === 0)) {
        const initialData = initial();
        employees = initialData.employees;
        admin = initialData.admin;
    }


  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  return { employeeData, adminData };
};
