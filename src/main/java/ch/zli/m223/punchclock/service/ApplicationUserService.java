package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.repository.ApplicationUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationUserService {
    ApplicationUserRepository applicationUserRepository;

    public ApplicationUserService(ApplicationUserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }


    public List<ApplicationUser> getAll() {
        return applicationUserRepository.findAll();
    }

    public void remove(Long id){
        applicationUserRepository.deleteById(id);
    }
    public void update(ApplicationUser user) { applicationUserRepository.save(user);}
}
