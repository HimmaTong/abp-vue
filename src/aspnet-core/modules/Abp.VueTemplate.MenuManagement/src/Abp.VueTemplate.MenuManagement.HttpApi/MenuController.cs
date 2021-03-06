﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace Abp.VueTemplate.MenuManagement
{
    [RemoteService]
    [Route("api/menus")]
    public class MenuController : MenuManagementController, IMenuAppService
    {
        private readonly IMenuAppService _menuAppService;

        public MenuController(IMenuAppService menuAppService)
        {
            _menuAppService = menuAppService;
        }

        [HttpGet("{id}")]
        public virtual Task<MenuDto> GetAsync(Guid id)
        {
            return _menuAppService.GetAsync(id);
        }

        [HttpGet]
        public virtual Task<PagedResultDto<MenuDto>> GetListAsync(MenuRequestDto input)
        {
            return _menuAppService.GetListAsync(input);
        }

        [HttpPost]
        public virtual Task<MenuDto> CreateAsync(CreateOrUpdateMenuDto input)
        {
            return _menuAppService.CreateAsync(input);
        }

        [HttpPut("{id}")]
        public virtual Task<MenuDto> UpdateAsync(Guid id, CreateOrUpdateMenuDto input)
        {
            return _menuAppService.UpdateAsync(id, input);
        }

        [HttpDelete("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _menuAppService.DeleteAsync(id);
        }

        [HttpGet("auth-policies")]
        public virtual Task<List<AuthPolicyDto>> GetAuthPolicies()
        {
            return _menuAppService.GetAuthPolicies();
        }
    }
}
