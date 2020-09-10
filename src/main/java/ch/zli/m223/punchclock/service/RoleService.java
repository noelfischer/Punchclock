package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Role;
import ch.zli.m223.punchclock.repository.RoleRepository;

import java.util.List;

public class RoleService {
    private RoleRepository roleRepository;

    public List<Role> findAll() { return roleRepository.findAll();}

    public Role findById(Long id) { return roleRepository.findById(id).orElse(null);}
}
