INSERT INTO fitofan.`organization_package_category_names` (name)
VALUES 
    ('junior'),
    ('middle'),
    ('senior'),
    ('organization'),
    ('government'),
    ('commercial');

INSERT INTO fitofan.`organization_packages` (name, description, price) VALUES 
    ('Beginner Pass', 'Access to Access to Any Club', 2.99),
    ('Regular Pass', 'Access to Access to Any Club', 9.9),
    ('Access Pass', 'Access to Access to Any Club & All the PerksAccess to Club', 29.9),
    ('Unlimited Access', 'Unlimited Access to Access to Any Club & All the PerksAccess to Club', 10.75),
    ('Test Pass', "Test any description", 9.3),
    ('Regular Pass 2', 'Access to Access to Any Club 2', 11.5),
    ('Access Pass 2', 'Access to Access to Any Club & All the PerksAccess to Club 2', 22.5),

INSERT INTO fitofan.`organization_package_categories` (organization_package_id, organization_package_category_name_id)
VALUES
    (1, 2),
    (1, 4),
    (2, 1),
    (2, 6),
    (3, 3),
    (3, 5),
    (4, 1),
    (5, 2),
    (5, 6),
    (7, 3),
    (7, 4)

SELECT id from fitofan.`organization_package_category_names`;
SELECT id from fitofan.`organization_packages`;