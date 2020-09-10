package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.EntryRepository;
import ch.zli.m223.punchclock.service.EntryService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntriesController {
    private EntryRepository entryRepository;
    private EntryService entryService;

    public EntriesController(EntryService entryService, EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
        this.entryService = entryService;
    }

    //Returns all entries to <url>/entries
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Entry> getAllEntries() {
        return entryService.findAll();
    }

    //The controller for Post requests to <url>/entries
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Entry createEntry(@Valid @RequestBody Entry entry) {
        return entryService.createEntry(entry);
    }

    //The controller for Delete requests to <url>/entries
    @DeleteMapping
    @ResponseStatus(HttpStatus.FOUND)
    public void deleteEntry(@Valid @RequestBody Long id) {
        System.out.println(id);
        entryService.deleteEntry(id);
    }

    //Returns Entry Count
    @GetMapping("/count")
    @ResponseStatus(HttpStatus.OK)
    public int getEntryCount() {
        return entryRepository.entryCount();
    }
}

