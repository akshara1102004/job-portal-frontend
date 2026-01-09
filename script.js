document.addEventListener('DOMContentLoaded', () => {
    
    
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            
            const icon = menuIcon.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

       
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.querySelector('i').classList.remove('fa-times');
                menuIcon.querySelector('i').classList.add('fa-bars');
            });
        });
    }

   
    const searchButton = document.querySelector('.btn-search');
    
    if (searchButton) {
        searchButton.addEventListener('click', () => {
           
            const jobRole = document.getElementById('job-role-select').value;
            
            const inputs = document.querySelectorAll('.search-bar input[type="text"]');
            
            const keywords = inputs[0] ? inputs[0].value : '';
            const location = inputs[1] ? inputs[1].value : '';

           
            if (jobRole || keywords || location) {
                alert(`Search Initiated: 
Job Role: ${jobRole || 'Any'}
Keywords: ${keywords || 'None'}
Location: ${location || 'Any'}`);
            } else {
                 alert('Please select a Job Role or enter search criteria to search.');
            }
        });
    }

}); 