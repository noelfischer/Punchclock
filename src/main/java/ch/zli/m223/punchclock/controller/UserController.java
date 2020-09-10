package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.repository.ApplicationUserRepository;
import ch.zli.m223.punchclock.service.ApplicationUserService;
import ch.zli.m223.punchclock.service.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private RoleService roleService;
    private ApplicationUserService applicationUserService;


    public UserController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder, ApplicationUserService applicationUserService) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.applicationUserService = applicationUserService;
    }

// The controller for the signup Post request
    @PostMapping("/signup")
    public void signUp(@RequestBody ApplicationUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        applicationUserRepository.save(user);
    }
// The controller for returning all users
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ApplicationUser> getAllUser() {
        return applicationUserService.getAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void removeUser(@PathVariable String id) {
        applicationUserService.remove(Long.parseLong(id));
    }

}
